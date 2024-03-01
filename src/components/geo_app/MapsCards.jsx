export const MapsCards = ({ nome_estado, img_map, toggle }) => {
    return (
        <div style={{ backgroundColor: 'rgb(16 13 37 / var(--tw-bg-opacity))', padding: '20px' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ marginLeft: '30px', fontSize: '30px' }}>{nome_estado}</h2>
                <button style={{
                    marginRight: '30px',
                    fontSize: '20px',
                    cursor: 'pointer',
                    border: 'solid 1px #fff',
                    padding: '0px 10px',
                    marginBottom: '10px',
                    borderRadius: '10px'
                }}
                    className="hover:bg-slate-700"
                    onClick={toggle}>X</button>
            </div>


            <div>{img_map}</div>
        </div>
    );
};

