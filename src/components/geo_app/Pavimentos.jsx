export const Pavimentos = ({ sobre }) => {
    return (
        <div>
            {sobre.map((item, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', width: '270px' }}>
                    {item.pavimento.map((pavimentoItem, pavimentoIndex) => (
                        <p key={pavimentoIndex}>{pavimentoItem[0].toUpperCase()}{pavimentoItem.slice(1,)}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};
