var BASE_URL = "https://api.ubports.com/v1/"

var get = {
  devices: function(t) {
    return t.$http.get(BASE_URL + "devices")
  },
  communityDevices: function(t) {
    return t.$http.get(BASE_URL + "devices/community")
  },
}
