interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  id: number;
}

function ServiceCard({ data, ref }: { data: ServiceCardProps; ref?: any }) {
  const { title, description, image } = data;
  return (
    <div
      className="bg-[#F6FAF3] pt-[36px] lg:pl-[55.57px] pl-[20px] max-w-[1042px] mx-auto rounded-[11.75px] flex items-center justify-between shrink-0"
      ref={ref}
    >
      <div className="lg:max-w-[345px] max-w-[200px] md:max-w-[300px] flex flex-col gap-1 sm:mr-7 mr-2">
        <h6 className="md:font-semibold font-medium lg:text-[1.22rem]/[100%] text-[#828282] lg:mb-4">
          {title}
        </h6>
        <p className="text-[#22263F] font-medium lg:text-[2.62rem]/[100%] min-[550px]:text-[1.4rem] md:text-[1.8rem] tracking-[-2%]  lg:mb-4 max-w-[200px] sm:max-w-[445px]">
          {description}
        </p>
        <button className="lg:px-[21.54px] lg:py-[9.75px] py-[2px] sm:py-[5px] md:py-[7px] bg-[#03217F] text-white lg:rounded-[8px] rounded-[5px] lg:max-w-[120px] max-w-[70px]  lg:text-nowrap text-[0.65rem] md:text-[0.85rem]">
          Learn More
        </button>
      </div>

      <div className="w-[100px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[520px] lg:h-[520px] scroll-">
        <img
          src={image}
          alt=""
          className="rounded-br-[11.75px] object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default ServiceCard;
