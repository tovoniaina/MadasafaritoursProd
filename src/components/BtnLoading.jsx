import React, { Component } from 'react'

export class BtnLoading extends Component {
    state = {
        loading: false
    }

    fetchData = () => {
        this.setState({loading : true});

        setTimeout(() => {
            this.setState({loading : false});
        }, 2000)
    }
    
  render() {
      const {loading} = this.state;
    return (
      <div style={{marginTop : '60px'}}>
          <button className='button' onClick={this.fetchData} disabled={loading}>
            { loading && <i className='fa fa-refresh fa-spin'></i>}
                Sending your email
          </button>
      </div>
    )
  }
}

export default BtnLoading



