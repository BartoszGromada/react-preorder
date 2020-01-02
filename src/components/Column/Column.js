import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import Icon from '../Icons/Icon.js';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    name: PropTypes.node,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  }
  
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  addCard(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
        </h3>
        <div>
          {this.state.card.map(({key, ...cardsProps}) => (
            <Card key={key} {...cardsProps} />
          ))}
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    );
  }
}

export default Column;
