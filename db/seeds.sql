use employees;

INSERT INTO department (name)
VALUES
    ('IT'),
    ('Finance & Accounting'),
    ('Sales & Marketing'),
    ('Operations');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Full Stack Developer', 100000, 1),
    ('Software Engineer', 120000, 1),
    ('Accountant', 130000, 2),
    ('Finanical Analyst', 140000, 2),
    ('Marketing Coordindator', 150000, 3),
    ('Sales Lead', 160000, 3),
    ('Project Manager', 180000, 4),
    ('Operations Manager', 110000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Smith', 1, NULL),
    ('Joe', 'Black', 2, 1),
    ('Anna', 'Williams', 3, NULL),
    ('Peter', 'Gates', 4, 3),
    ('Stephen', 'Pierce', 5, NULL),
    ('Mark', 'Dove', 6, 5),
    ('Jack', 'Green', 7, NULL),
    ('Katherine', 'White', 8, 7);