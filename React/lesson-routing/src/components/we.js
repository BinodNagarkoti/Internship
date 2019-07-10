import React,{Component} from 'react'
import {DataTable,TableHeader } from 'react-mdl'
class wePage extends Component {
render(){
    return(
        <div class="table">
            <span> Todays Gold and Silver Rate ( Wednesday, June 19,2019 - 11:50 AM )</span>
            <DataTable
    shadow={0}
    rows={[
        {material: 'Gold Hallmark - tola ( छापावाल सुन )', quantity: '1 tola' , price: 63003.10},
        {material: 'Gold Tajabi - tola ( तेजाबी सुन )', quantity: '1 tola', price:  1.25},
        {material: 'Silver - tola ( चाँदी )', quantity: '1 tola', price: 720.25},
        {material: 'Gold Hallmark - 10g ( छापावाल सुन )', quantity: '10 gram', price: 54015.00},
        {material: 'Gold Tajabi - 10g ( तेजाबी सुन )', quantity: '10 gram', price:  53760.00},
        {material: 'Silver - 10g ( चाँदी )', quantity: '10 gram', price: 617.50}
    ]}>
    <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
    <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
    <TableHeader numeric name="price" cellFormatter={(price) => `\NPR ${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
</DataTable>
</div>



    );
}
}
export default wePage

