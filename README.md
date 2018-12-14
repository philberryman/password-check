# Password Check

Checks if a password is acceptable based on requirements set out in object.

Returns **true** or **false**

Password requirements (found in functions.js):

```console
passwordRules = {
length:  10,
must_have_numbers:  true,
must_have_caps:  true
};
```

# Running from command line

password.check.js can be called from the command line with a string as the password parameter

```console
password.check.js <string>
```

- fork and clone repo
- navigate to repo directory

```console
~$  cd src
~$  node password.check.js pa$$word
false
~$  node password.check.js PA$$word99
true
```

# Running from Docker

- fork and clone repo
- navigate to repo directory
- install Docker if not installed already.

```console
~$ docker swarm init
~$ docker stack deploy -c docker-compose.yml password
```

- test using curl
- password can be set by editing the value in the "password" object

```console
~$ curl -H "Content-Type: application/json" \
-d '{"password":"pa$$word"}' \
-X GET http://localhost:5000/password_check
```

# Running Unit Tests with Jest

```console
~$ npm install
~$ npm test
```

Four tests will run

- Is too short (checks passwords less than 10 chars return false)
- No capital letters (checks passwords with no capitals return false)
- No numbers (checks passwords with no numbers return false)
- Password is valid (checks a valid password returns true)
