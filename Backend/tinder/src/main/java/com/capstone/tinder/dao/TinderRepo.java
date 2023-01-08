package com.capstone.tinder.dao;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.capstone.tinder.entity.TinderUser;

@Repository
public interface TinderRepo extends CrudRepository<TinderUser,String> {
	
	TinderUser findByEmailid(String emailid);

	
}

