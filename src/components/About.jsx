import React from 'react'

const About = () => {
  return (
    <div className="bg-white py-16">
    <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Japan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-nijin rounded-lg overflow-hidden shadow-md">
                <img src="https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Japan Image" className="w-full h-auto" />
                <div className="p-6">
                    <p className="text-lg text-white mb-6">Japan, the Land of the Rising Sun, is a captivating blend of ancient tradition and modern innovation. From the tranquil beauty of its cherry blossoms to the bustling streets of its vibrant cities, Japan offers a rich tapestry of culture, cuisine, and opportunities.</p>
                </div>
            </div>
            <div className="bg-nijin rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                    <p className="text-lg text-white mb-6">Explore the ancient temples and shrines nestled among serene landscapes, or immerse yourself in the cutting-edge technology and innovation that defines modern Japan. Whether you're a culture enthusiast, a nature lover, or a tech enthusiast, Japan has something for everyone.</p>
                </div>
                <img  src="https://images.pexels.com/photos/15830265/pexels-photo-15830265/free-photo-of-low-angle-view-of-a-japanese-temple-and-a-tree-in-autumn-foliage.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Japan Image" className="w-full h-[600px] object-cover" />
            </div>
            <div className="bg-nijin rounded-lg overflow-hidden shadow-md">
                <img  src="https://images.pexels.com/photos/5745869/pexels-photo-5745869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Japan Image" className="w-full h-[600px] object-cover" />
                <div className="p-6">
                    <p className="text-lg text-white mb-6">At "Work Opportunities in Japan," we're passionate about helping individuals discover the endless possibilities that await them in Japan. From career opportunities in diverse industries to cultural experiences that will leave you enchanted, let us be your guide on this extraordinary journey.</p>
                </div>
            </div>
        </div>
    </div>
</div>



  )
}

export default About