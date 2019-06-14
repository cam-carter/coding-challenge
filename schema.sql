DROP DATABASE IF EXISTS task_dev;
CREATE DATABASE task_dev;

CREATE TABLE tasks (
  group VARCHAR(255),
  name VARCHAR(255),
  status VARCHAR(255),
  completed_at DATE
);

CREATE TABLE task_dependencies (
  task_id INT FOREIGN KEY REFERENCES tasks(id),
  dependency_id INT FOREIGN KEY REFERENCES tasks(id)
);
