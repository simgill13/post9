create table if not exists toppings (
    id serial primary key,
    name text not null
);
create table if not exists pizzas (
    id serial primary key,
    name text not null
);
create table if not exists pizzas_toppings (
    pizza_id integer references pizzas not null,
    topping_id integer references toppings not null,
    primary key (pizza_id, topping_id)
);