import React, { useEffect } from 'react';

function Contact() {
    const calendlyIframe = `
        <script>
        window.onmessage = function(event) {
            event.source.postMessage(
            {
                iframeId: event.data,
                scrollHeight: document.body.getBoundingClientRect().height || document.body.scrollHeight
            },
            event.origin
            );
        };
        </script>
        <body style="margin:0">
        <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/infygrowfs/consultation_session"
            style="min-width:320px;height:700px;"
        ></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </body>
        `;

    return(
        <>
            <section className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 pt-10">
                <p className="text-3xl text-[#bab675] font-bold text-center pb-20">BOOK YOUR FREE CONSULTATION TODAY</p>
                            <iframe
                id="iframe-0123372"
                frameBorder="0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-top-navigation"
                src="javascript: window.frameElement.getAttribute('srcdoc');"
                srcDoc={calendlyIframe}
                style={{
                    width: "75%",
                    display: "block",
                    height: "750px",
                    overflow: "visible",
                    transition: "height 1.5s ease",
                }}
                ></iframe>

            </section>
            <section className="min-h-screen flex flex-col justify-center items-center text-[#bab675]">
                    {/* Title */}
                    <h1 className="text-4xl font-bold mb-16 tracking-wide">
                        CONTACT US
                    </h1>
                    <div className="max-w-5xl w-full flex flex-col md:flex-row md:justify-center md:space-x-32 items-center mx-auto px-4">
                        {/* LEFT SIDE – Address + Phone + Email */}
                        <div className="text-center space-y-4 md:w-1/2">
                            <p className="text-xl">
                                22212 North 34th Place, Phoenix,<br />
                                Arizona 85050, United States
                            </p>
                            <p className="text-lg">
                                901-457-9703
                            </p>
                            <p className="text-lg">
                                giridharpatha.fin@gmail.com
                            </p>
                        </div>

                        {/* RIGHT SIDE – Hours */}
                        <div className="mt-10 md:mt-0 md:w-1/2 text-center">
                            <h2 className="text-xl mb-4 tracking-widest">
                                Hours
                            </h2>
                            <ul className="space-y-2 text-lg">
                                <li><span className="w-14 inline-block">Mon</span> By Appointment</li>
                                <li><span className="w-14 inline-block">Tue</span> By Appointment</li>
                                <li><span className="w-14 inline-block">Wed</span> By Appointment</li>
                                <li><span className="w-14 inline-block">Thu</span> By Appointment</li>
                                <li><span className="w-14 inline-block">Fri</span> By Appointment</li>
                                <li><span className="w-14 inline-block">Sat</span> By Appointment</li>
                                <li className="font-bold">
                                    <span className="w-14 inline-block font-normal">Sun</span> 
                                    By Appointment
                                </li>
                            </ul>
                        </div>
                    </div>
            </section>
        </>);
}
export default Contact;