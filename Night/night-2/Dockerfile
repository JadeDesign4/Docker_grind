
FROM alpine:latest

RUN apk add --no-cache fastfetch \
        && apk add nano

ENV STUDENT_GOAL="Thinkbook" \
    STUDENT_NAME="John" \
    STUDY_HOURS="8" \
    COURSE="Docker"

CMD sh -c "\
    echo 'Name: ${STUDENT_NAME}' && \
    echo 'Goal: ${STUDENT_GOAL}' && \
    echo 'Course: ${COURSE}' && \
    echo 'Daily Study Hours: ${STUDY_HOURS}' && \
    fastfetch \
"
