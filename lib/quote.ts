export type QuoteKind = "courier" | "freight" | "regular" | "logistics";
export const quoteKinds: { id: QuoteKind; label: string; service: string }[] = [
 { id: "courier", label: "Package", service: "Courier delivery" },
 { id: "freight", label: "Freight", service: "Freight & specialized delivery" },
 { id: "regular", label: "Regular deliveries", service: "Regular deliveries" },
 { id: "logistics", label: "Logistics help", service: "Logistics management" }
];
// Operational limits remain unset until KWC approves them. Never infer a vehicle limit from a UI label.
export const courierConfig: { sizeGuidance: string; maxWeightKg: number | null; maxDimensionsCm: [number, number, number] | null } = {
 sizeGuidance: "Envelope, parcel or larger package? Include approximate dimensions and weight. We’ll match the vehicle and confirm what can be accepted.",
 maxWeightKg: null, maxDimensionsCm: null
};
export type QuoteField = { name: string; label: string; type?: string; required?: boolean; options?: string[]; max?: number; help?: string };
export const services = quoteKinds.map(item => item.service);
export const modes = ["Road"];
export function kindFor(service: string): QuoteKind { return quoteKinds.find(item=>item.service===service)?.id ?? "courier"; }
export function fieldsFor(kind: QuoteKind): { title: string; description: string; fields: QuoteField[] }[] {
 const recurring = kind === "regular";
 const freight = kind === "freight" || kind === "logistics";
 return [
 { title: recurring ? "Where will your deliveries go?" : "Where’s it going?", description: "A city or postal code is enough to start. Add full addresses if you have them.", fields: [
 { name: "Pickup Location", label: recurring ? "Pickup area" : "Pickup address, city or postal code", required:true, max:300 },
 { name: "Delivery Location", label: recurring ? "Delivery regions" : "Destination address, city or postal code", required:true, max:300 },
 ...(freight ? [{name:"Freight Service",label:"What kind of freight help?",options:["Shared-capacity freight (LTL)","Full truckload (FTL)","Expedited road freight","Final-mile delivery","Help me plan"]}] : []) ] },
 { title: recurring ? "What does a typical round look like?" : "What are you sending?", description: freight ? "Pallets, commodity, measurements and access help us plan suitable equipment." : "Approximate details are welcome. We can work through the rest with you.", fields: [
 {name:"Freight Type", label:freight?"Commodity / what’s on the pallets?":"What are you sending?",required:true,max:200},
 {name:"Item Count",label:recurring?"Approximate items per collection":freight?"Pallet or piece count":"Number of packages",type:"number",required:!recurring},
 {name:"Weight",label:"Total weight (include kg or lb)",max:100,help:"Approximate is fine. Tell us if you need help measuring."},
 {name:"Dimensions",label:freight?"Dimensions per pallet / piece (include units)":"Package dimensions (L × W × H, include cm or in)",max:300},
 ...(recurring?[{name:"Approximate Volume",label:"Approximate volume",required:true,max:200,help:"e.g. about 20 orders per collection, with seasonal peaks"}]:[]),
 ...(freight?[
 {name:"Pickup Access",label:"Pickup access",options:["Loading dock","Ground level / no dock","Inside / stairs","Please advise"]},
 {name:"Delivery Access",label:"Delivery access",options:["Loading dock","Ground level / no dock","Inside / stairs","Multiple locations","Please advise"]},
 {name:"Liftgate",label:"Tailgate / liftgate needed?",options:["Not required","Pickup","Delivery","Both","Please advise"]},
 {name:"Handling",label:"Extra handling or appointments",max:500,help:"Inside delivery, two-person handling, wrapping, palletizing, placement or packaging removal—tell us what is needed."},
 {name:"Temperature Service",label:"Temperature control",options:["Not required","Refrigerated / frozen capacity requested"]},
 {name:"Temperature",label:"Temperature requirements (if applicable)",max:200,help:"Include °C / °F, tolerances and any monitoring requirements."}
 ]:[]),
 {name:"Shipment Details",label:"Anything else we should know?",type:"textarea",max:3000,help:"No patient information, passwords or sensitive documents."} ] },
 {title:recurring?"When would you like to start?":"When do you need it?",description:"Timing is requested here and confirmed with you before booking.",fields:[
 {name:"Preferred Date",label:recurring?"Preferred start date":"Requested pickup date",type:"date",required:true},
 ...(!recurring?[{name:"Delivery Date",label:"Required delivery date (optional)",type:"date"}]:[]),
 {name:"Service Preference",label:recurring?"Service preference":"Delivery preference",options:["Same-day if available","Next-day if available","Scheduled / flexible","Urgent / direct","Please advise"],required:true},
 ...(recurring?[
 {name:"Frequency",label:"How often?",required:true,options:["Weekdays","Several times a week","Weekly","Monthly","Varies / let’s discuss"]},
 {name:"Route Schedule",label:"Pickup windows, stops and timing notes",max:500}
 ]:[]) ]},
 {title:"How can we reach you?",description:"We’ll review your request and contact you with the next steps. No account needed.",fields:[
 {name:"Name",label:"Your name",required:true,max:120},{name:"Company Name",label:"Company (optional)",max:160},
 {name:"Email",label:"Email",type:"email",required:true,max:254},{name:"Phone",label:"Phone (optional)",type:"tel",max:40}
 ]}
 ];
}
export const quoteGroups = fieldsFor("courier");
export function validateQuote(form: FormData) {
 const values: Record<string,string> = {}; const errors: Record<string,string> = {};
 const service = form.get("Service");
 if (typeof service !== "string" || !services.includes(service) || form.getAll("Service").length !== 1) errors.Service = "Choose a delivery type.";
 const kind = kindFor(typeof service === "string" ? service : "");
 values.Service = typeof service === "string" ? service : "";
 for (const field of fieldsFor(kind).flatMap(group=>group.fields)) {
  const entries=form.getAll(field.name); const raw=entries[0];
  if(entries.length>1 || (raw!=null && typeof raw!=="string")){errors[field.name]="Enter one text value.";continue;}
  const value=typeof raw==="string"?raw.trim():""; values[field.name]=value;
  if(field.required&&!value) errors[field.name]="This field is required.";
  else if(value.length>(field.max??300))errors[field.name]="Please shorten this field.";
  else if(value&&field.options&&!field.options.includes(value))errors[field.name]="Choose an available option.";
  else if(value&&field.type==="date"&&(!/^\d{4}-\d{2}-\d{2}$/.test(value)||!Number.isFinite(Date.parse(value))||new Date(value).toISOString().slice(0,10)!==value))errors[field.name]="Enter a valid date.";
 }
 if(values.Email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.Email))errors.Email="Enter a valid email address.";
 if(values.Phone&&!/^[+\d().\s\-xext#]{7,40}$/i.test(values.Phone))errors.Phone="Enter a valid phone number.";
 if(values["Item Count"]&&!/^[1-9]\d{0,5}$/.test(values["Item Count"]))errors["Item Count"]="Enter a whole number from 1 to 999999.";
 if(values["Delivery Date"]&&values["Preferred Date"]&&values["Delivery Date"]<values["Preferred Date"])errors["Delivery Date"]="Delivery cannot be before pickup.";
 if(values["Temperature Service"]==="Refrigerated / frozen capacity requested"&&!values.Temperature)errors.Temperature="Include the required range and temperature units.";
 return {values,errors};
}
