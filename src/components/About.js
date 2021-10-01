<<<<<<< HEAD
import React from 'react'
// "homepage": "http://Abhijeet452.github.io/TextUtils",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
function About(props) {
    const stls={
        color:props.mode=== 'dark' ? 'white':'black',
        backgroundColor:props.mode === 'dark' ? 'rgb(255 255 255 / 10%)':'white',
        // border:props.mode === 'dark' ? '1px solid white' : '1px solid rgb(255 255 255 / 10%)',
        // borderColor:props.mode === 'dark'? 'white':'rgb(255 255 255 / 10%)'
    }
    return (
        <div class="accordion" id="accordionExample" style={{fontSize:'18px'}}>
            <div class="accordion-item" style={stls}>
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={stls}>
                        <strong>Analyze Your Text</strong>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={stls}>
                    <strong>TextUtils </strong> gives tou a way to analyze your text quickly and efficiently. Be it word count, characters count, sentences count and minutes read.
                    </div>
                </div>
            </div>
            <div class="accordion-item" style={stls}>
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={stls}>
                    <strong>Free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={stls}>
                        <strong>TextUtils</strong> is a free character counter tool that provides instant character count and word count statistics for a given text. <strong>TextUtils</strong> reports the number of words, characters and sentences. Thus it is suitable for writing text with word/character limit.
                    </div>
                </div>
            </div>
            <div class="accordion-item" style={stls}>
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={stls}>
                    <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={stls}>
                        This word counter software works in any browser such as Chrome, Firefox, Internet Explorer, Safari, MicrosoftEdge, etc. It suits to count characters in facebook, blog, Ebooks, Excel Documents,PDFs,Essays, etc.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
=======
import React from 'react'
// "homepage": "http://Abhijeet452.github.io/TextUtils",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
function About(props) {
    const stls={
        color:props.mode=== 'dark' ? 'white':'black',
        backgroundColor:props.mode === 'dark' ? 'rgb(255 255 255 / 10%)':'white',
        // border:props.mode === 'dark' ? '1px solid white' : '1px solid rgb(255 255 255 / 10%)',
        // borderColor:props.mode === 'dark'? 'white':'rgb(255 255 255 / 10%)'
    }
    return (
        <div class="accordion" id="accordionExample" style={{fontSize:'18px'}}>
            <div class="accordion-item" style={stls}>
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={stls}>
                        <strong>Analyze Your Text</strong>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={stls}>
                    <strong>TextUtils </strong> gives tou a way to analyze your text quickly and efficiently. Be it word count, characters count, sentences count and minutes read.
                    </div>
                </div>
            </div>
            <div class="accordion-item" style={stls}>
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={stls}>
                    <strong>Free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={stls}>
                        <strong>TextUtils</strong> is a free character counter tool that provides instant character count and word count statistics for a given text. <strong>TextUtils</strong> reports the number of words, characters and sentences. Thus it is suitable for writing text with word/character limit.
                    </div>
                </div>
            </div>
            <div class="accordion-item" style={stls}>
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={stls}>
                    <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={stls}>
                        This word counter software works in any browser such as Chrome, Firefox, Internet Explorer, Safari, MicrosoftEdge, etc. It suits to count characters in facebook, blog, Ebooks, Excel Documents,PDFs,Essays, etc.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
>>>>>>> 42ab2307d33074ec5ca28b701ebf1958440ce8d4
