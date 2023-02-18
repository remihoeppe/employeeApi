-   Using lombok to help with Getter and Setters and NoArgsConstructors. Removes a lot of lines of code by just using annotations

Spring Testing (Integration / Unit) -> https://www.youtube.com/watch?v=Geq60OVyBPg
Spring Testing Code Source -> https://github.com/amigoscode/spring-boot-fullstack-professional/tree/13-testing/src/test/java/com/example/demo
Important for this project:
Full tests suites
Errors handlings, both backend and frontend
Giving errors back to users (based on backend validations)
Logging -> https://www.baeldung.com/spring-boot-logging
Follow first snippet for MVP, go further if you've got time
Host it somewhere
Good documentation, use the documentation template in the post-course
Stack:
(Optional) Replace component axios calls with async thunks then you can (leave this till last)
useQuery (React Query)
SCSS modules (Make sure you have a naming conventions)
React Form Hook
All code formatting needs to be immaculate
API Semantics must be followed, e.g right codes for right responses
POST / PATCH -> PUT
PUT -> rewrite if exists, create if not -> 200, 201, 400 (startDate < finishDate, finishDate is null, is ongoing is true)
Add @CrossOrigin policy to you controller, otherwise you'll get cors errors
Stack:
React-ts w/ vite
vitest instead of jest
Spring
React testing library
axios frontend with proxy base url -> add "proxy" to package.json
Gotchas:
When working with javascrtipt libraries in typescript, you will often have to install the

12:32
@types/<package>
12:33
Get alex to help, get your tests running on a github CI both backend and frontend. (Add badges to your readme)
