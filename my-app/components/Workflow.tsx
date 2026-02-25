
import Image from "next/image";

const WorkFlow = () => {
    return(
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Who Needs Our Services
    </h1>
    <div className="flex flex-col md:flex-row gap-12 mt-10">
        <div className="flex flex-col rounded-t-md shadow-lg p-6 bg-white">
            <Image src="/ecommerce.png" alt="e-commerce"
            width={200}
            height={250}/>

        </div>
        <p>Protect online purchases from fraud and non-delivery.
Funds are only released when the buyer confirms receipt.</p>
    </div>
</div>
    )
}
export default WorkFlow;