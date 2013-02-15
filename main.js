require(['lib/mediator', 'lib/backend'], function(mediator, backend) {

    // decide what you want to do depending on the backend signal_name
    mediator.subscribe('backend_message', function(signal_name, data) {
        console.log('signal received from backend: ' + signal_name +
                    ', with this data: ' + data);
        switch (signal_name) {
            case 'version_provided':
                document.querySelector('#data').innerHTML = data['version'];
                break;

            default:
               document.querySelector('#signal_name').innerHTML =
                                                          'Unknown signal';
        }
    });
/* TODO */
    // send our first message to the backend
    mediator.publish('send_backend', 'frontend_loaded',
                                     'swipereader running on');

});
