/** @type {import('next').NextConfig} */
const nextConfig={reactStrictMode:true,distDir:process.env.KWC_BUILD_DIR || ".next",async redirects(){return [
 {source:"/services/freight-brokerage",destination:"/services/logistics",permanent:true},
 ...["ltl-distribution","specialized-freight","frozen-refrigerated-freight","warehousing-cross-dock"].map(slug=>({source:`/services/${slug}`,destination:"/services/freight",permanent:true})),
 {source:"/services/b2b-dedicated-routes",destination:"/contact?service=regular",permanent:true},
 ...["final-mile-b2c","expedited-courier"].map(slug=>({source:`/services/${slug}`,destination:"/services/courier",permanent:true}))
 ];}};
export default nextConfig;
