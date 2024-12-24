/* eslint-disable react/prop-types */
import Text from "../elements/text";
import Button from "../elements/button";
import getTranslate from "../../services/translate.api";
import { useEffect, useState } from "react";

const QuoteContent = ({quote, author, handle}) => {
    const [textQuote, setTextQuote] = useState("");
    useEffect(() => {
        const fetchTranslatedQuote = async () => {
            const translatedQuote = await getTranslate(quote);
            setTextQuote(translatedQuote);
        };
    
        fetchTranslatedQuote();
    }, [quote]);

    if(textQuote === "tak terdefinisi") {
        setTextQuote("");
    }
     
    return (
        <div className="daily__quote__wrapper">            
            <div className="daily__quote__wrapper_content">
                <div className="daily__quotes__content">
                    <Text className="text__quote" type="p">
                        <q>{textQuote}</q>
                    </Text>
                    <Text className="author__quote" type="p">- {author} -</Text>
                </div>
                <div className="button__other__quote">
                    <Button type="button" handle={handle}>Kutipan Lain</Button>
                </div>
            </div>
        </div>
    );
}

export default QuoteContent;