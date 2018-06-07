import React from 'react';

class Progress extends React.Component {
        constructor(props) {
              super(props)
        }
        render() {
                return (
                        <div className='component-progress'>
                                {this.props.progress}s
                        </div>
                );
        }
}

export default Progress;