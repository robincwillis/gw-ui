import React, { Component } from 'react';

import InlineSVG from 'svg-inline-react';

import { keyedObjToArr } from '../../util';
import Button from 'components/Button';
import EmptyArea from 'components/EmptyArea/EmptyArea';
import { VisibleOnlyAdmin, VisibleOnlyCustomer } from 'components/AuthenticatedComponent';

import Gear from '../../../assets/icons/gear';
import Plus from '../../../assets/icons/plus';
import Trash from '../../../assets/icons/trash';
import GraduationCap from '../../../assets/icons/graduation-cap';

import './product-card';

export default class ProductList extends Component {

	render () {
		let products = keyedObjToArr(this.props.products);

		return (
			<div className="product-list flex-grid stretch left break-sm">
				<VisibleOnlyAdmin>
					<div className="col hide-lg">
						<EmptyArea
							onClick={this.props.createProduct.bind(this)}
							label="New Product"
							icon={Plus}
						/>
					</div>
				</VisibleOnlyAdmin>
				{products.map( (product)=> {

					let coverImage = this.props.files[product.cover];

					let coverImageUrl = ''
					if (coverImage) {
						coverImageUrl = coverImage.downloadURL
					}

					let thumbStyle = {
					  backgroundImage: 'url(' + coverImageUrl + ')'
					};

					return (<div key={product.id} className="col">
							<div className="card clickable padded product" onClick={this.props.editProduct.bind(this, product)}>
								<div className="product-image" style={thumbStyle}>
									{!coverImage ? (<InlineSVG src={GraduationCap} element="span" className="placeholder-icon icon" />) : false}
								</div>
								<div className="product-card-row general-info">
									<span className="title">{product.name}</span>
									<span className="cost">${product.price} / Student</span>
									<VisibleOnlyAdmin>
										<div>
										<Button
											buttonClass="transparent square edit-btn small"
											icon={Gear}
										/>
										<Button
											buttonClass="transparent square delete-btn small"
											icon={Trash}
											onClick={this.props.deleteProduct.bind(this, product)}
										/>
										</div>
									</VisibleOnlyAdmin>
								</div>
								{/*
								<VisibleOnlyAdmin>
									<div className="product-card-row product-stats">
									<ul>
										<li>
											<div className="label">% of Users</div>
											<div className="value">57%</div>
										</li>
										<li>
											<div className="label">Licensed Users</div>
											<div className="value">1,234</div>
										</li>
										<li>
											<div className="label">Revenue (1 Yr)</div>
											<div className="value">$123,000</div>
										</li>
									</ul>
									</div>
								</VisibleOnlyAdmin>

								<div className="product-card-row product-cta">
									<Button label="Add Students" buttonClass="secondary block blue" />
								</div>
								*/}
							</div>
						</div>);
				})}
			</div>
		);
	}

}