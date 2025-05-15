import certificates from '../../data/certificates'

const Certificates = () => {
  return (
    <div className='w-full px-6' id='academia'>
      <h1 className='w-fit min-w-48 text-4xl bg-[#0a192f] font-bold py-4 pl-2 z-50 sticky top-0'>Certificates</h1>
      <div className='p-16 w-full'>
        {certificates.map((e)=><CertificateCard title={e.title} certificateName={e.certificateName} issuedBy={e.issuedBy} date={e.date} imageUrl={e.imageUrl} />)}

      </div>
    </div>
  )
}

export default Certificates



const CertificateCard = ({ title, certificateName, issuedBy, date, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <h2 className="text-2xl font-bold mb-4 -mt-1 text-gray-800 text-center">{title}</h2>
      {imageUrl && (
        <img 
          className="w-full object-cover rounded-md mb-4" 
          src={imageUrl} 
          alt={`${certificateName} certificate`} 
        />
      )}
      <div>
        <p className="text-lg font-medium text-gray-700">{certificateName}</p>
        <p className="text-gray-500 py-1">Issued by: {issuedBy}</p>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  );
};
