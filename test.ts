import { runFakeComplete,checkPlayed } from "./main";

const Authorization = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsIng1dCI6InQtOE9BMHpqdDhwQjdwNlFmaENaYThGb1U4OCJ9.eyJhdXRoOm1ldGhvZCI6ImltcGxpY2l0X2dyYW50OkVwaWMiLCJyb2xlcyI6InVzZXIiLCJzdWIiOiJmYTYyODE4Ni02YzY5LTQxNWMtYjY1ZS0zYzkzMWQzYzdmYTQiLCJ1bmlxdWVfbmFtZSI6ImZhNjI4MTg2LTZjNjktNDE1Yy1iNjVlLTNjOTMxZDNjN2ZhNCIsInVzZXJpZCI6Ijc2NWI1OTY1ZDkxYjRmNDliZDQ1NGE3MmYyZTA1NjZlIiwicGxhdGZvcm0iOiJlcGljIiwicGlzIjoiIiwibmlja25hbWUiOiJRdWFydHogVGFuIiwiRXBpY0FjY2Vzc1Rva2VuIjoiWnBeTCsqcXBKbGcyQk1gV0hDZDVRb0gnJkQlcnUhTjBLXnEjTHU8bmlJSF1dI08lQjpTQG5zQGhEXFwzaCVMVm8jPTJdWiNzK0E9Uz85PyU3IiwiQUVTS2V5IjoiPk4_WThcIjtUPCpZPG1ZRUddJ1tcXEFCaE0oQEh1LmU0UVQ9cy4nNW47bTZiMjJUKDAvSW06MTZDOy9tTG9gN3J0dVZNdSpkIWQ0MEdTbTZgcyYzOFg6UFotIUNOcVYqV1gnMUMuREhhKEopWG9ZIzheR1smMmJoakFaYVUkI1RLKC9hUG8rLVhaO0c2XlQtXCIpbTFNKVslSGgkUUdgMm82PyIsIkFFU0l2IjoiXCJePkFqXmopNlskNmlcXDkySmg8KldjLzArblNkdV1wWzNPLWBcXGcwN3JlQF9IRWM4ZiwlKyxJYTAqVGU7KzU7VlZjWVk6RSxRbkNlRGNWLkNGO29DVFB1UjUwLkA7dS5vOHVMPGYjcWJ1PGdrXU1Ta0dpKmNXcmE6ZXRrP3EwJy5DLTdzPV1wRVdEUThTLDQkMyNaPmJZWzIlbCYnJ1ArMSIsIkVwaWNUb2tlbkV4cGlyZXNJbiI6IjM2MDAuMCIsIm5iZiI6MTY2MTA3NTk5MSwiZXhwIjoxNjYxMTA0NzkxLCJpc3MiOiJhdXRoLmhpdG1hbi5pbyJ9.JxocneyH6EBQmAI26Ibb2AS2hybgy1va0XdrU-7g4T3VfOsn7keXvBXxbZuha5hUFJPFJPIDZjmSAI3FFGOOGlKEohxpfWInJt1r8Cik_2PpzsDATASU2qIIpGSeEX1UH6tKCcbdhfWzuJOJFs5y8b80fJ6Biubh4hfj2xu80zlWQIi8IguBrkZZA2VVQqyiKMUwt5JgGC8neCpl3aEwv-5rty7wuXQvGhrekaruNzSrKTukmHRlRaHX-kPUwrGUvwUqyU7eCRo86mMuCN6Ubnm9aVKbvvDTEx1oF5IfwwLZ2aYXKZ1btABcbX1KITnEbFIem6UvUC3u32iXqdU5Qw";

!(async () => {
    console.log(await checkPlayed("7d85f2b0-80ca-49be-a2b7-d56f67faf252",Authorization))
    console.log(await runFakeComplete("7d85f2b0-80ca-49be-a2b7-d56f67faf252", {
        complete: true,
        targetList: [],
        // targetList: ["d339202b-5282-4bb9-9be6-d3335311be1e"],
        // challenges: await fetchChallengeFromChallengeService("b2c0251e-1803-4e12-b860-b9fa6ce5c004"),
        time: 320,
        maxRequests: 99,
        doorUnlockEventNum: 0,
        silent: false,
        oauthToken: Authorization
        // contractType: "elusive"
    }))
})()
