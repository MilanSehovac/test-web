import { Container } from '@mui/material';
import React, { useState } from 'react';


function ReadMore({children = 100}) {

    const text = children;

    const [isShow, setIsShowLess] = useState(true)
    const result = isShow ? text.slice(0, 100) : text;

    function toggleIsShow() {
        setIsShowLess((!isShow));
    }

    return(
        <p>
            {result}
            <span className="btn btn-link" onClick={toggleIsShow}>
                {isShow ? "Show More" : "Show Less"}
            </span>
        </p>
    )

}

const About = () => {
    return (
        <div>
        <Container>
            <ReadMore>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat quam id leo sollicitudin, nec elementum ex suscipit. Phasellus viverra, justo vel sagittis placerat, diam lorem gravida risus, in tempor nulla risus ut ex. Maecenas pellentesque justo ut pretium rhoncus. Donec scelerisque, enim vitae venenatis aliquet, dui ipsum tristique nisi, ut mollis mauris tortor nec ex. Aenean interdum lorem vitae condimentum dignissim. Vivamus vehicula bibendum leo, in congue lacus condimentum vitae. Cras eu urna a ex gravida vulputate et quis erat.

                Etiam euismod augue id felis finibus, ac dignissim justo porttitor. Nam sem risus, dignissim eget accumsan sed, rutrum eu dui. Proin justo tortor, pretium non lorem vulputate, semper consectetur mi. Nam posuere feugiat libero, ac sodales nisl luctus eu. Suspendisse vestibulum purus urna, in lacinia sem convallis eu. Vivamus finibus quam eget mattis aliquet. Integer aliquam diam nec dui dapibus, at scelerisque dolor gravida. Cras non iaculis nisi, vitae rutrum felis. Nunc ut massa cursus, dapibus odio pulvinar, varius ante. Curabitur in turpis non justo laoreet porta in id ex.

                Cras purus lorem, ultrices dignissim porta ac, auctor nec enim. Nullam diam sem, mattis in ex a, vehicula feugiat risus. Aenean aliquet laoreet quam, id accumsan lacus eleifend sed. Fusce massa lectus, molestie quis viverra et, rhoncus sed turpis. Nullam accumsan consectetur dictum. Proin metus risus, interdum eget vestibulum at, tempus vel lacus. Quisque eget tellus sed nunc rhoncus condimentum id a libero. Pellentesque condimentum sodales dui, eu aliquet risus pharetra eget. Etiam dapibus mattis turpis sit amet iaculis. Fusce quis lacus turpis. In eleifend sem congue urna rhoncus, eget pharetra libero imperdiet. Aenean nunc ex, posuere vitae justo auctor, facilisis posuere dui. Sed nisi erat, semper at nunc id, luctus varius tellus. Sed bibendum ante non mattis mattis.

                Praesent libero est, rhoncus in nisi a, scelerisque interdum odio. Sed fermentum pharetra odio, eu elementum dui malesuada id. Vivamus rutrum est nec laoreet porttitor. Nam condimentum nisl nisl, eu efficitur eros auctor nec. Integer sodales consectetur laoreet. In nisl velit, sagittis at mauris a, venenatis rhoncus ligula. Etiam at urna viverra, venenatis ligula ac, lacinia urna. Ut malesuada vitae mauris id iaculis. Quisque non semper quam. Proin tincidunt porta neque, at consequat dolor lacinia sed. Nulla iaculis pharetra urna eget gravida. Aliquam euismod eu elit ut varius. Praesent volutpat vitae sem non rhoncus.
            </ReadMore>
        </Container>
        </div>
    )
}


export default About;