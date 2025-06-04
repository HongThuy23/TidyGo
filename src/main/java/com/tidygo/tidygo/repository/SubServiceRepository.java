package com.tidygo.tidygo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tidygo.tidygo.entity.SubService;

@Repository
public interface SubServiceRepository extends JpaRepository<SubService, Long> {

    List<SubService> findByServiceId(Long serviceId);
}
