import React, { Component } from "react";
import { Stage, Layer, Rect, Label, Text, Tag } from "react-konva";

const style = {
    padding: "1rem",
};

export default class CardGame extends Component {

    render() {
        return (
            <div style={style}>
                <Stage width="500" height="800">
                    <Layer>
                        <Rect name="cardBackgroundBorder"
                            x={10}
                            y={10}
                            width={250}
                            height={500}
                            fill="black"
                        />
                        <Rect name="cardBackground"
                            x={20}
                            y={20}
                            width={230}
                            height={480}
                            fill="blue"
                        />
                        <Rect name="cardName"
                            x={20}
                            y={20}
                            width={230}
                            height={40}
                            fill="lightBlue"
                        />
                        <Label x={22} y={22}>
                            <Text text="Nome do Card Game" />
                        </Label>
                        <Rect name="cardImage"
                            x={20}
                            y={60}
                            width={230}
                            height={200}
                            fill="yellow"
                        />
                         <Label x={22} y={62}>
                            <Text text="Imagem do Card Game" />
                        </Label>
                        <Rect name="cardStars"
                            x={20}
                            y={250}
                            width={230}
                            height={40}
                            fill="white"
                        />
                         <Label x={22} y={252}>
                            <Text text="Estrelas" />
                        </Label>
                        <Rect name="cardDescription"
                            x={20}
                            y={290}
                            width={230}
                            height={150}
                            fill="red"
                        />
                         <Label x={22} y={292}>
                            <Text text="Descrição" />
                        </Label>
                        <Rect name="cardAttack"
                            x={20}
                            y={440}
                            width={115}
                            height={60}
                            fill="green"></Rect>
                        <Label x={22} y={442}>
                            <Text text="Ataque" />
                        </Label>
                        <Rect name="cardDefense"
                            x={135}
                            y={440}
                            width={115}
                            height={60}
                            fill="pink"
                        />
                        <Label x={137} y={442}>
                            <Text text="Defesa" />
                        </Label>
                    </Layer>
                </Stage>
            </div>

        );
    }
}