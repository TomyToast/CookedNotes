import React, {Component, Fragment} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import data from '../recipes';

import {MenuBar} from './MenuBar'
import {ShowRecipes} from './ShowRecipes'
import {ImageCompsTextArea} from './ImageCompsTextArea'

export class All extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            desc: '',
            db: data,
            comp: '',
            quanty: '',
            unit: '',
            rows: [{comp: '',quanty: '',unit: ''}],
            src: "https://via.placeholder.com/250x150",
            error: '',
            success: false,
            filterText: ''
        }
    }

    componentWillMount() {
        localStorage.getItem('db') && this.setState({
            db: JSON.parse(localStorage.getItem('db'))
        })
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('db', JSON.stringify(nextState.db));
        localStorage.setItem('dbDate', Date.now());
    }

    setTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    setSource = (e) => {
        e.preventDefault();
        const source = prompt('Podaj pełną ściężkę do img(250px x 150px)', "https://via.placeholder.com/250x150")
        this.setState({
            src: source
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {rows, db, title, desc, comp, quanty,unit} = this.state;
        const comps = [];
        let error = '';

        console.log(rows)

        if (title === ''){
            error += 'Podaj tytuł!\n';
        }

        const isEmpty = (val) => (val.comp) === ''

        if (rows.find(isEmpty)){
            error += 'Podaj składnik!\n';
        }
        const isBigEnough = (val) => Number(val.quanty) <= 0

        if (rows.find(isBigEnough)){
            error += 'Podaj poprawną ilość!\n';
        }
        if (desc === ''){
            error += 'Podaj opis!\n';
        }

        if (error === ''){
            this.setState({
                success: true
            })
            confirm('Przepis dodany poprawnie')
        } else {
            this.setState({
                error: error
            }, () => {
                alert(this.state.error)
            })
            console.log(error)
            return false
        }

        rows.map((line, index) => {
            comps.push(line)
        })

        db.push({
            title: `${this.state.title}`,
            img: `${this.state.src}`,
            description: `${this.state.desc}`,
            components: comps
        })
        this.setState({
            db: db,
            title: '',
            desc: '',
            comp: '',
            quanty: '',
            unit: '',
            rows: [{comp: '',quanty: '',unit: ''}],
            src: "https://via.placeholder.com/250x150"
        });


        console.log(`to jest db: `)
        console.log(db)
    }

    handleRowPropsChange = (idx) => (evt) => {
        const newRow = this.state.rows.map((line, ridx) => {
            if (idx !== ridx) return line;
            return {...line, comp: evt.target.value};
        });

        this.setState({rows: newRow})
    }

    handleRowQuantyChange = (idx) => (evt) => {
        const newRow = this.state.rows.map((line, ridx) => {
            if (idx !== ridx) return line;
            return {...line, quanty: evt.target.value};
        });

        this.setState({rows: newRow})
    }

    handleRowUnitChange = (idx) => (evt) => {
        const newRow = this.state.rows.map((line, ridx) => {
            if (idx !== ridx) return line;
            return {...line, unit: evt.target.value};
        });

        this.setState({rows: newRow})
    }

    handleAddRow = (e) => {
        e.preventDefault();
        this.setState({
            rows: this.state.rows.concat([{comp: '',quanty: '',unit: ''}])
        });
    }

    handleRemoveRow = (idx) => (e) => {
        e.preventDefault();
        this.setState({
            rows: this.state.rows.filter((r, ridx) => idx !== ridx)
        });
    }

    handleRemoveRecipe = (index) => (e) => {
        e.preventDefault();
        this.setState({
            db: this.state.db.filter((db, dbidx) => index !== dbidx)
        });
        console.log("to jest db: ")
        console.log(this.state.db)
    }

    handlePrint = () => {
        window.print()
    }

    handleSearch = (e) => {
        this.setState({
            filterText: e.target.value
        })
    }


    addDescription = (e) => {
        this.setState({
            desc: e.target.value
        })
    }

    render(){
        return (
            <Fragment >
                <HashRouter>
                    <div className="conteiner">
                        <MenuBar />
                        <Switch>
                            <Route
                                exact path='/'
                                render={
                                    (props) => <ShowRecipes {...props}
                                                    recipelist={this.state.db}
                                                    fTxt={this.state.filterText}
                                                    db={this.state.db}

                                                    handleRemoveRecipe={this.handleRemoveRecipe}
                                                    handlePrint={this.handlePrint}
                                                    findText={this.handleSearch}
                                                />
                                }
                            />
                            <Route
                                exact path='/create'
                                render={
                                    (props) => <ImageCompsTextArea {...props}
                                                    recipelist={this.state.db}
                                                    description={this.state.desc}
                                                    comp= {this.state.comp}
                                                    quanty= {this.state.quanty}
                                                    unit= {this.state.unit}
                                                    rows= {this.state.rows}
                                                    src={this.state.src}
                                                    title={this.state.title}
                                                    success={this.state.success}

                                                    myDescription={this.addDescription}
                                                    updateData= {this.handleSubmit}
                                                    handleRowPropsChange= {this.handleRowPropsChange}
                                                    handleRowQuantyChange= {this.handleRowQuantyChange}
                                                    handleRowUnitChange= {this.handleRowUnitChange}
                                                    handleAddRow= {this.handleAddRow}
                                                    handleRemoveRow= {this.handleRemoveRow}
                                                    setSource={this.setSource}
                                                    setTitle={this.setTitle}
                                                />
                                }
                            />
                            <Route	component={NotFound} />
                        </Switch>
                    </div>
                </HashRouter>
            </Fragment>
        )
    }
}

export class NotFound extends React.Component {
    render() {
        return	<div>
        <h1 className="notFound">404,Nothing is	here</h1>
        </div>;
    }
}
