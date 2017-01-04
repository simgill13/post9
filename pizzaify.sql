create table if not exists pizzas (
    id serial primary key,
    name text not null
);

create table if not exists batches (
    id serial primary key,
    pizza_id integer references pizzas not null,
    quantity integer not null
);