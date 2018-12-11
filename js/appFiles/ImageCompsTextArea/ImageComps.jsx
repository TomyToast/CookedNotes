import React, {Component, Fragment} from 'react';

import {Image} from './ImageComps/Image'
import {Components} from './ImageComps/Components'

export class ImageComps extends React.Component{

    render(){
        return(
            <div className='imageComps'>
                <Image
                    src={this.props.src}
                    title={this.props.title}

                    setTitle={this.props.setTitle}
                    setSrc={this.props.setSource}
                />
                <Components
                    rData={this.props.recipeData}
                    src={this.props.src}
                    addDescription={this.props.newDesc}
                    comp= {this.props.comp}
                    quanty= {this.props.quanty}
                    unit= {this.props.unit}
                    rows= {this.props.rows}
                    success={this.props.success}

                    addRecipe={this.props.updateData}
                    handleRowPropsChange= {this.props.handleRowPropsChange}
                    handleRowQuantyChange= {this.props.handleRowQuantyChange}
                    handleRowUnitChange= {this.props.handleRowUnitChange}
                    handleAddRow= {this.props.handleAddRow}
                    handleRemoveRow= {this.props.handleRemoveRow}
                />
            </div>
        )
    }
}
