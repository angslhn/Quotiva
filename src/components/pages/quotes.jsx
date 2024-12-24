import QuoteContent from "../fragments/quote_content";
import QuoteFooter from "../fragments/quote_footer";
import QuoteHeader from "../fragments/quote_header";
import { useEffect, useState } from "react";
import getQuote from "../../services/quote.api";

export default function Quotes() {
    const [data, setData] = useState("");
    const api_url = 'https://api.api-ninjas.com/v1/quotes';
    const api_key = '2ZOfNjB5fClY54YUm0Wf+g==DAtHbl0VXD0mTuAK';

    useEffect(() => {
        (async () => {
            const quote = await getQuote(api_url, api_key);
            setData(quote);
        })();
    }, [api_url, api_key]);

    async function handleClickNextQuote() {
        const quote = await getQuote(api_url, api_key);
        setData(quote);
    }

    return(
        <>
            <QuoteHeader/>
            <QuoteContent quote={data?.quote} author={data?.author} handle={handleClickNextQuote} />
            <QuoteFooter/>
        </>
    );
}