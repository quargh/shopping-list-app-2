// AlleLebensmittel erwartet eine Liste 'lebensmittel', die sie anzeigen soll
export default function AlleLebensmittel({lebensmittel}){

      return (

          <div>
                {lebensmittel.map((item) => {
                      return (
                          <button key={item._id}>


                                {item.name.de}


                          </button>
                      )
                })}
          </div>

      );

}

