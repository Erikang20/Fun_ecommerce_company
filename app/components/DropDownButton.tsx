// import React from "react";

// type ProductType = {
// 	product_id: number;
// 	price: number;
// 	quantity_in_stock: number;
// 	category: string;
// 	brand: string;
// 	color: string;
// 	size: string;
// };

// type FilteredProductProps = {
// 	products: ProductType[];
// };
// // export const DropDownButton = ({
// // 	name1,
// // 	name2,
// // 	items,
// // }: DropDownButtonProps) => {
// // 	return (
// // 		<>
// // 			<select>
// // 				<option value={name1}>{name1}</option>
// // 				<option value={name2}>{name2}</option>
// // 				{items}
// // 			</select>
// // 		</>
// // 	);
// // };

// export const DropDownButton = ({ products }: FilteredProductProps) => {
// 	return (
// 		<div>
// 			{products.map((item: string, index: number) => (
// 				<select key={index} value={item}>
// 					{item}
// 				</select>
// 			))}
// 		</div>
// 	);
// };
