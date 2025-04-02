# FunTube
    - Header
        - Search
            - used youtube api to fetch auto suggestions
            - implemented debouncing for decreasing network calls on each key stoke
            - implemented caching using redux, when removing each character instead of making network call we display the data we store in redux
    - SideBar
    - MainContainer
        - Filters
        - VideosContainer
            - VideoCard - onclick it takes us to watchVideo view page using react-router
                - Video
                - Description
    - WatchVideo screen
        - fetch video ID and embed the iframe element to display the video 
        - Display comments of the video
    - Make responsive design
    - History Page
        - Restricted - need to sign up to view the page.

# Libraries
    - React
    - Vite
    - Redux/ToolKit
    - React-Router
    - Tailwindcss


# Third party
    - Google Api 
        -Youtube Api integration
    - FireBase Api
        -Authentication
