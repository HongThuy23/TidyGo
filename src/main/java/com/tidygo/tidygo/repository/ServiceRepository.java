package com.tidygo.tidygo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tidygo.tidygo.entity.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

}
