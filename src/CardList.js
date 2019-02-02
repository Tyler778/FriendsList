import React, { Component } from 'react'
import styled from 'styled-components'
import FriendsListContent from './FriendsListContent'
import FormContent from './FormContent'

export default class CardList extends Component {
  render() {
    return (
      <div className="container-fluid m">
      <div className="row">
      <div className="col-6">
        <div class="card text-white bg-info mt-3">
        
        <div class="card-body">
          <h4 class="card-title">Friend List</h4>
          <FriendsListContent>

          </FriendsListContent>
        </div>
      </div>
      </div>

      <div className="col-6">
      <div class="card text-white bg-info mt-3">
      <div class="card-body">
        <h4 class="card-title">Form</h4>
        <FormContent>

        </FormContent>
      </div>
      </div>
      </div>

      </div>
      </div>
    )
  }
}

