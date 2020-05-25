## Create
### Create backend
* Create Scala project
* * sbt new [project name]/play-scala-seed.g8

### Create frontend
* `mkdir clientui`
* `ng new clientui`
* Make a controller which returns root
* * `GET   /        controllers.FrontendController.index()`
* Serve static assets under public directory
* * `GET   /*file   controllers.FrontendController.assetOrDefault(file)`

## Debug
### Build backend
* `[project name]> sbt run`

### Build client
* `[project name]/clientui> ng serve`

## Deploy
* `[project name]/clientui> ng dist`
* Copy files from `[project name]/clientui/dist/` to `[project name]/public`
* `[project name]> sbt dist` 
* Output is in `[project name]/target/universal/` in `*-SNAPSHOT.zip` file

