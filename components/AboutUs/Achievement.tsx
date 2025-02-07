import React from "react";
import CountUp from "react-countup";

const Achievement = () => {
    return (
        <div className="bg-background py-6">
            <div className="page-max-width grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
                <div data-aos="fade-up">
                    <div className="border-l-2 mb-4 pl-1.5 border-warning text-warning text-2xl font-medium">
                        <CountUp
                            enableScrollSpy
                            scrollSpyOnce
                            decimals={1}
                            duration={5}
                            end={4.8}
                        />
                        <span className="font-medium">/5</span>
                    </div>
                    <div className="text-primary pl-2 text-xs">
                        Exceptional User Satisfaction Rating from our customers.
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="border-l-2 pl-1.5 mb-4 border-warning text-warning text-2xl font-medium">
                        <CountUp enableScrollSpy scrollSpyOnce duration={6} end={300} />
                        <span className="font-medium">+</span>
                    </div>
                    <div className="text-primary pl-2 text-xs">
                        Customers and partners served with excellence in{" "}
                        {new Date().getFullYear() - 1} , and that we continue to serve.
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="border-l-2 pl-1.5 mb-4 border-warning text-warning text-2xl font-medium">
                        <span className="font-medium">$</span>
                        <CountUp
                            enableScrollSpy
                            scrollSpyOnce
                            duration={6}
                            end={197957000}
                        />
                    </div>
                    <div className="text-primary pl-2  text-xs">
                        In payments processed through Backbone by our customers in{" "}
                        {new Date().getFullYear() - 1}
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="border-l-2 pl-1.5 mb-4 border-warning text-warning text-2xl font-medium">
                        <CountUp enableScrollSpy scrollSpyOnce duration={5} end={150} />
                        <span className="font-medium">+</span>
                    </div>
                    <div className="text-primary pl-2 text-xs">
                        We settle anywhere in the world, apart from the
                        sanctioned countries.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;
