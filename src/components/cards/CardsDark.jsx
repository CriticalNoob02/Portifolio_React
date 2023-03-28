import ButtonCards from "../buttons/ButtonCards"
import { Fragment } from "react"
import "./CardsDark.sass"

function CardsDark(props) {
    return Array.from({ length: props.length }, (v, k) => k)
        .map((i) => (
            [<Fragment>
                <div class="cardDarkBorder">
                    <div class="cardDarkBody">
                        <h1 className="cardDarkTitle">{props.title}</h1>
                        <p className="cardDarkParagraph">{props.text}</p>
                        <ButtonCards
                            title={props.title}
                        />
                    </div>
                </div>
            </Fragment>]
        ))
}

export default CardsDark