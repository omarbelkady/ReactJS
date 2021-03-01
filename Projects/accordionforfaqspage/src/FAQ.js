import React from 'react';

function FAQ({faq, elem}) {
    return(
        <div 
        className={ "faqs "+ (faq.open ? 'open' : '')}
        key={elem}
        >
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
    
    
        </div>
    )
}

export default FAQ;