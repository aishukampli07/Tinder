package com.capstone.tinder.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.capstone.tinder.entity.SwipeDetails;

@Repository
public interface SwipeRepo extends CrudRepository<SwipeDetails,String> {

}
