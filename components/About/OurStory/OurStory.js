const OurStory = () => {
  return (
    <div className="mt-[5rem] mb-[3rem] bg-white">
      <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <h3 className="text-primary text-3xl font-bold mb-4">Our Story</h3>
        <p className="text-xl font-light px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
          habitasse vitae sit urna.
        </p>
      </div>
      <div className="my-[5rem]">
        <section>
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-[#D9D9D9]">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary">
                    <h3
                      style={{ fontSize: "24px" }}
                      className="font-bold text-primary uppercase"
                    >
                      Date
                    </h3>
                    <p className="mt-3 text-secondary">
                      Pellentesque feugiat ante at nisl efficitur, in mollis
                      orci scelerisque. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#D9D9D9]">
                    <h3
                      style={{ fontSize: "24px" ,color: '#202124'}}
                      className="font-bold uppercase"
                    >
                      Date
                    </h3>
                    <p className="mt-3 text-secondary">
                      Pellentesque feugiat ante at nisl efficitur, in mollis
                      orci scelerisque. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#D9D9D9]">
                    <h3
                      style={{ fontSize: "24px" ,color: '#202124'}}
                      className="font-bold uppercase"
                    >
                      Date
                    </h3>
                    <p className="mt-3 text-secondary">
                      Pellentesque feugiat ante at nisl efficitur, in mollis
                      orci scelerisque. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurStory;
