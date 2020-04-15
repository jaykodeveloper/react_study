import React from 'react';

const createUseConsumer = Consumer => mapContextToProps => WrappedComponet =>{
    const defaultMapContextToProps = context => ({context});

    function UseConsumer(props) {
        return (
            <Consumer>
                {
                    context => {
                        const contextProps = (mapContextToProps || defaultMapContextToProps)(context);
                        return (
                            <WrappedComponet
                              {...contextProps}
                              {...props}
                              />
                        )
                    }
                }
            </Consumer>
        )
    }

    const displayName = WrappedComponet.displayName || WrappedComponet.name || 'component';
    UseConsumer.displayName = `UseConsumer(${displayName})`
    return UseConsumer;
}

export default createUseConsumer;