import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import StoryModal from './StoryModal';
import {paginationOptions} from './settings';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

class StoriesTable extends React.Component {

  state = {
    // modal
    modalIsOpen: false,
    modalContent: [],
    // table
    isLoading: true,
    stories: [],
  }

  componentDidMount() {
    // fetch data & save it to stories
    fetch('/stories')
      .then(res => res.json())
      .then(stories => this.setState({
        stories: stories.hits,
        isLoading: false
      }));
  }

  // modal
  openModal = (id) => {
    // fetch data & save it to modalContent
    fetch('/story/' + id)
      .then(res => res.json())
      .then(story => this.setState({
        modalContent: story,
        modalIsOpen: true
      }));
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  detailsButton = (cell) => {
    return (
      <span
        onClick={() => this.openModal(cell)}
        style={{cursor: 'pointer'}}
      >
        Details
      </span>
    );
  }

  // table
  columns = [{
    dataField: 'objectID',
    text: 'Id'
  }, {
    dataField: 'title',
    text: 'Story Title',
    filter: textFilter({
      placeholder: 'Search by title...'
    })
  }, {
    dataField: 'author',
    text: 'Story Author',
    filter: textFilter({
      placeholder: 'Search by author...'
    })
  }, {
    dataField: 'objectID',
    text: 'Actions',
    formatter: this.detailsButton
  }];

  render () {
    return (
      this.state.isLoading ?
        <div>Loading ...</div> :
        <div>
          <BootstrapTable
            keyField='id'
            data={this.state.stories}
            columns={this.columns}
            filter={filterFactory()}
            pagination={paginationFactory(paginationOptions)}
            bootstrap4={true}
          />
          <StoryModal
            isOpen={this.state.modalIsOpen}
            modalContent={this.state.modalContent}
            onRequestClose={this.closeModal}
          />
        </div>
    );
  }
}

export default StoriesTable;
