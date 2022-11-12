import React from "react";

type TopCarsType = {
    manufacturer: string;
    model: string;
}

type NewArrType = {
    car: Array<TopCarsType>;
}

const NewArr = (props: NewArrType) => {
    return (
        <table>
            <tr>
                <th>#</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.car.map((Data1, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{Data1.manufacturer}</td>
                        <td>{Data1.model}</td>
                    </tr>
                )
                    ;
            })}
        </table>
    );
}

export default NewArr;