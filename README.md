# Example Node ORM with DB2 - using BLOB column

Using packages [loopback-datasource-juggler][1] and [loopback-connector-db2][2]

Run docker DB2 - Need registry in https://hub.docker.com/_/db2-developer-c-edition

    startdb2.sh

Install dependencies

    npm install

Run

    node index.js

[1]: https://www.npmjs.com/package/loopback-datasource-juggler
[2]: https://www.npmjs.com/package/loopback-connector-db2