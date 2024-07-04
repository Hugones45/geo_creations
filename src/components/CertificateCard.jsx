const CertificateCard = ({ certificate }) => {
    return (
        <div className="bg-[#1d1836] p-5 rounded-lg shadow-lg mb-5">
            <div className="flex items-center mb-3">
                <div
                    className="w-12 h-12 rounded-full flex justify-center items-center"
                    style={{ background: certificate.iconBg }}
                >
                    <img
                        src={certificate.icon}
                        alt={certificate.title}
                        className="w-3/4 h-3/4 object-contain"
                    />
                </div>
                <h3 className="text-white text-[20px] font-bold ml-3">
                    {certificate.title}
                </h3>
            </div>
            <ul className="list-disc ml-5 space-y-2">
                {certificate.points.map((point, index) => (
                    <li key={`certificate-point-${index}`} className="text-white-100 text-[14px] tracking-wider">
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CertificateCard
