import $ from 'jquery'

export const postOption = (url, payload) => {
  // console.log('postOption triggered?', url, input)
  return postRequest(url, 'post_new_option', handleData, payload);
}

export const getOptions = (url) => {
  // console.log('getOptions triggered?', url)
  return postRequest(url, 'get_example_options', handleData);
}

export const deleteOption = (url, payload) => {
  // console.log('deleteOption triggered?', url, input)
  return postRequest(url, 'delete_option', handleData, payload);
}

function handleData(data) {
  // console.log('handleData response return', data.apis);
  return {
    options: data.options
  }
}

function postRequest(url, action, handler, payload = {}) {
  let data = Object.assign({ action }, payload);
  return $.ajax({
    url,
    type: 'post',
    data,
    dataType: 'json'
  })
    .then(handler)
}
