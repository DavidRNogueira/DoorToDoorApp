package org.door2door.dao;

import org.door2door.entities.TeamEntity;

public interface LoginDao {
    TeamEntity getUserByEmail(String email);
}
