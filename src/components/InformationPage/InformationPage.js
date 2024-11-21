import React from 'react';

const InformationPage = () => {
    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                padding: '20px',
                marginTop: '80px',
            }}
        >
            <h1>Information</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {/* Left Column */}
                <div style={{ width: '48%' }}>
                    <section>
                        <h2>My Address</h2>
                        <p>Greenwich Street, #2 Wochester, MA 02122</p>
                        <p>Phone: xxx-x65-4992</p>
                        <p>Email: xxxeenwich@gmail.com</p>
                        <p>XXX Ride: 877-765-7433</p>
                        <p>XXX ID#: 061549</p>
                    </section>
                    <hr />
                    <section>
                        <h2>United Cerebral Palsy</h2>
                        <p>
                            <strong>Contact:</strong> Kara Madden - Director
                        </p>
                        <p>Address: 480 Washington St., Norwood, MA 02062</p>
                        <p>Phone: 617-924-4003</p>
                    </section>
                    <hr />
                    <section>
                        <h2>National Seating & Mobility</h2>
                        <p>
                            <b>
                                Amy now uses National Seating & Mobility for day
                                program repairs.
                            </b>
                        </p>
                        <p>Address: 12 Southville Rd., Southboro, MA 01772</p>
                        <p>Phone: (800) 660-006</p>
                    </section>
                    <hr />
                </div>

                {/* Right Column */}
                <div style={{ width: '48%' }}>
                    <section>
                        <h2>Margret McKenna</h2>
                        <p>Address: xx Newton Street, Boston, MA 02118</p>
                        <p>Phone: xxx-xxx-7062</p>
                    </section>
                    <hr />
                    <section>
                        <h2>Mom: Mei Fun Yu</h2>
                        <p>Address: 11 East Newton St., Apt 428, Boston, MA 02118</p>
                        <p>Phone: 617-536-0963</p>
                        <p>
                            <strong>Wheelchair Ramp:</strong> Back of the
                            building off Father Francis Gilday St.
                        </p>
                    </section>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default InformationPage;
