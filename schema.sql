create table if not exists recipes (
    id serial primary key,
    name text not null,
    description text not null
);


create table if not exists myTags (
    id  serial primary key,
    tag text not null
);